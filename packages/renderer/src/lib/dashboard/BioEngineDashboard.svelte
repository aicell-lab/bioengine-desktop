<script lang="ts">
import IconImage from '../appearance/IconImage.svelte';
import Link from '../ui/Link.svelte';
import {default as Status} from '../ui/ProviderStatus.svelte';
import BioEngineControl from './BioEngineControl.svelte';
import BioEngineIcon from '../images/BioEngineIcon.svelte';
const version="";


let bioengine_status="installed";
const links = [
  {title: "Docs", url: "https://bioimage-io.github.io/bioengine/"}

];
</script>

<div class="bg-charcoal-800 mb-5 rounded-md p-3 flex-nowrap" role="region" aria-label="BioEngine Dashboard Info">
  <div class="flex flex-row">
    <div class="flex flex-row">
      <BioEngineIcon class="mx-auto max-h-12" alt="BioEngine"></BioEngineIcon>
      <div class="flex flex-col text-gray-400 ml-3 whitespace-nowrap" aria-label="context-name">
        <div class="flex flex-row items-center">
          BioEngine
          {#if version}
            <div class="text-gray-800 text-sm pl-1" aria-label="Version">
              v{version}
            </div>
          {/if}
        </div>
        <div class="flex flex-row pt-1" aria-label="Actual State">
          <Status status="{bioengine_status}" />
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center text-center flex-grow">
        <div class="flex flex-row text-xs text-gray-900 mt-4">
          <p>
            BioEngine
          </p>
        </div>

        <BioEngineControl status={bioengine_status}/>
      <!-- From slot contents for provider ready component -->
      <!--
      {#if provider.containerConnections.length > 0}
        <div class="flex flex-row text-xs text-gray-900 mt-4">
          <p>
            {provider.containerConnections.map(c => c.name).join(', ')}
          </p>
        </div>
      {/if}

      {#if provider.updateInfo?.version && provider.version !== provider.updateInfo?.version}
        <div class="mt-5 mb-1 w-full flex justify-around">
          <ProviderUpdateButton onPreflightChecks="{checks => (preflightChecks = checks)}" provider="{provider}" />
        </div>
      {/if}
      <PreflightChecks preflightChecks="{preflightChecks}" />

      <ProviderWarnings provider="{provider}" />
      -->
    </div>
  </div>

  <!--ProviderLinks provider="{provider}" /-->
  {#if links.length > 0}
    <div class="mt-2 flex flex-row justify-around">
      {#each links as link}
        <Link class="text-sm" externalRef="{link.url}">
          {link.title}
        </Link>
      {/each}
    </div>
  {/if}

</div>
