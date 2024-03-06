<script lang="ts">
import { onMount, onDestroy } from 'svelte';
import Button from '../ui/Button.svelte';
import type { Unsubscriber } from 'svelte/store';
import type { ProviderContainerConnectionInfo, ProviderInfo } from '../../../../main/src/plugin/api/provider-info';
let providerUnsubscribe: Unsubscriber;
export let status: string | undefined = undefined;
export let bioengine: BioEngine | undefined = undefined;

const stop_bioengine = () => {alert("Stopping BioEngine...");};
</script>

<div class="flex flex-row mt-4">
{#if status === "installed"}
  <Button title="Start BioEngine" on:click={bioengine.start}>Start BioEngine</Button>
{:else if status === "not-installed"}
  <Button title="Install BioEngine">Install BioEngine</Button>
{:else if status === "started"}
  <Button title="Stop BioEngine" on:click={bioengine.stop}>Stop BioEngine</Button>
{/if}
</div>
