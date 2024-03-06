<script lang="ts">
import bgImage from './background.png';
import DesktopIcon from '../images/DesktopIcon.svelte';
import Fa from 'svelte-fa';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { onMount } from 'svelte';
import { WelcomeUtils } from './welcome-utils';
import { router } from 'tinro';
import { featuredExtensionInfos } from '/@/stores/featuredExtensions';
import Tooltip from '../ui/Tooltip.svelte';
import Button from '../ui/Button.svelte';

export let showWelcome = false;
export let showTelemetry = false;

let telemetry = true;

const welcomeUtils = new WelcomeUtils();
let podmanDesktopVersion: string;

onMount(async () => {
  const ver = await welcomeUtils.getVersion();
  if (!ver) {
    welcomeUtils.updateVersion('initial');
    showWelcome = true;
  }
  const telemetryPrompt = await welcomeUtils.havePromptedForTelemetry();
  if (!telemetryPrompt) {
    showTelemetry = true;
  }
  podmanDesktopVersion = await window.getPodmanDesktopVersion();
});

function closeWelcome() {
  showWelcome = false;
  if (showTelemetry) {
    welcomeUtils.setTelemetry(telemetry);
  }
}
</script>

{#if showWelcome}
  <div
    class="flex flex-col flex-auto fixed top-0 left-0 right-0 bottom-0 bg-zinc-700 bg-no-repeat z-50"
    style="background-image: url({bgImage}); background-position: 50% -175%; background-size: 100% 75%">
    <!-- Header -->
    <div class="flex flex-row flex-none backdrop-blur p-6 mt-10">
      <div class="flex flex-auto text-lg font-bold">Get started with BioEngine Desktop</div>
    </div>

    <!-- Body -->
    <div class="flex flex-col justify-center content-center flex-auto backdrop-blur p-2 overflow-y-auto">
      <div class="flex justify-center p-2"><DesktopIcon /></div>
      <div class="flex justify-center text-lg font-bold p-2">
        <span class="mr-2">🎉</span>Welcome to BioEngine Desktop (using Podman Desktop v{podmanDesktopVersion}) !
      </div>
      <!--<div class="flex flex-row justify-center">-->
        <!--<div class="bg-charcoal-500 px-4 pb-4 pt-2 rounded">-->
          <!--<div class="flex justify-center text-sm text-gray-700 pb-2">-->
            <!--<div>Podman desktop supports many container engines and orchestrators, such as:</div>-->
          <!--</div>-->
          <!--<div class="grid grid-cols-3 gap-3">-->
            <!--{#each $featuredExtensionInfos as featuredExtension}-->
              <!--<div-->
                <!--class="rounded-md-->
           <!--bg-charcoal-700 flex flex-row justify-center border-charcoal-700 p-2">-->
                <!--<div class="place-items-top flex flex-col flex-1">-->
                  <!--<div class="flex flex-row place-items-center flex-1">-->
                    <!--<div>-->
                      <!--<img-->
                        <!--alt="{featuredExtension.displayName} logo"-->
                        <!--class="max-h-6 max-w-[24px] h-auto w-auto"-->
                        <!--src="{featuredExtension.icon}" />-->
                    <!--</div>-->
                    <!--<div-->
                      <!--class="flex flex-1 mx-2 underline decoration-2 decoration-dotted underline-offset-2 cursor-default justify-center">-->
                      <!--<Tooltip tip="{featuredExtension.description}" top>-->
                        <!--{featuredExtension.displayName}-->
                      <!--</Tooltip>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--{/each}-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <div class="flex justify-center p-2 text-sm">
        Configure the underlying settings using <button
          class="text-violet-400 pl-1"
          on:click="{() => {
            closeWelcome();
            router.goto('/preferences');
          }}">Settings</button
        >.
      </div>
    </div>


    <!-- Footer - button bar -->
    <div class="flex justify-end flex-none bg-charcoal-600 p-8">
      <div class="flex flex-row">
        <Button
          on:click="{() => {
            closeWelcome();
          }}">Go to BioEngine Desktop</Button>
      </div>
    </div>
  </div>
{/if}
