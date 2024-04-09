<script lang="ts">
import { onMount, onDestroy } from 'svelte';
import Button from '../ui/Button.svelte';
import type { Unsubscriber } from 'svelte/store';
import { providerInfos } from '../../stores/providers';
import type { ProviderContainerConnectionInfo, ProviderInfo } from '../../../../main/src/plugin/api/provider-info';
import type {BioEngineStatus} from '../../../../bioengine/src/bioengine';
import { BioEngine } from '../../../../bioengine/src/bioengine';
let providerUnsubscribe: Unsubscriber;
//export let status: string | undefined = undefined;
export let bioengine: BioEngine | undefined = undefined;
let provider: ProviderInfo | undefined = undefined;
let providers: ProviderInfo[] = [];
$: providerConnections = providers
  .map(provider => provider.containerConnections)
  .flat()
  // keep only podman providers as it is not supported by docker
  .filter(providerContainerConnection => providerContainerConnection.type === 'podman')
  .filter(providerContainerConnection => providerContainerConnection.status === 'started');


onMount(async () => {
  console.log("Subscribing to provider info..");
  providerUnsubscribe = providerInfos.subscribe(value => {
    providers = value;
  });
  let providers_valid = providers.filter(item => item.id === "podman");
  if(providers_valid.length === 1){
    if(providers_valid[0].containerConnections.length > 0){
      provider = providers_valid[0].containerConnections[0];
    }
  }
});

onDestroy(() => {
  if (providerUnsubscribe) {
    providerUnsubscribe();
  }
});




const stop_bioengine = () => {alert("Stopping BioEngine...");};
let status = bioengine?.get_status();
</script>

<div class="flex flex-row mt-4">
{#if status === "installed"}
  <Button title="Start BioEngine" on:click={() => bioengine.start(provider)}>Start BioEngine</Button>
{:else if status === "not-installed"}
  <Button title="Install BioEngine">Install BioEngine</Button>
{:else if status === "started"}
  <Button title="Stop BioEngine" on:click={() => bioengine.stop()}>Stop BioEngine</Button>
{/if}
</div>
