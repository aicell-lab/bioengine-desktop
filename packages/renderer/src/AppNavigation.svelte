<script lang="ts">
import { contributions } from './stores/contribs';
import { onDestroy, onMount } from 'svelte';
import { CommandRegistry } from './lib/CommandRegistry';
import { podsInfos } from './stores/pods';
import { containersInfos } from './stores/containers';
import { imagesInfos } from './stores/images';
import { volumeListInfos } from './stores/volumes';
import { kubernetesContexts } from './stores/kubernetes-contexts';
import { deployments } from './stores/deployments';
import { services } from './stores/services';
import { ImageUtils } from './lib/image/image-utils';
import type { ImageInfo } from '../../main/src/plugin/api/image-info';
import ContainerIcon from './lib/images/ContainerIcon.svelte';
import PodIcon from './lib/images/PodIcon.svelte';
import BioEngineIcon from './lib/images/BioEngineIcon.svelte';
import ImageIcon from './lib/images/ImageIcon.svelte';
import VolumeIcon from './lib/images/VolumeIcon.svelte';
import DeploymentIcon from './lib/images/DeploymentIcon.svelte';
import NavItem from './lib/ui/NavItem.svelte';
import type { TinroRouteMeta } from 'tinro';
import type { Unsubscriber } from 'svelte/store';
import NewContentOnDashboardBadge from './lib/dashboard/NewContentOnDashboardBadge.svelte';
import SettingsIcon from './lib/images/SettingsIcon.svelte';
import DashboardIcon from './lib/images/DashboardIcon.svelte';
import ServiceIcon from './lib/images/ServiceIcon.svelte';

let podInfoSubscribe: Unsubscriber;
let containerInfoSubscribe: Unsubscriber;
let imageInfoSubscribe: Unsubscriber;
let volumeInfoSubscribe: Unsubscriber;
let contextsSubscribe: Unsubscriber;
let deploymentsSubscribe: Unsubscriber;
let servicesSubscribe: Unsubscriber;

let podCount = '';
let containerCount = '';
let imageCount = '';
let volumeCount = '';
let contextCount = 0;
let deploymentCount = '';
let serviceCount = '';

const imageUtils = new ImageUtils();
export let exitSettingsCallback: () => void;

onMount(async () => {
  const commandRegistry = new CommandRegistry();
  commandRegistry.init();
  podInfoSubscribe = podsInfos.subscribe(value => {
    if (value.length > 0) {
      podCount = ' (' + value.length + ')';
    } else {
      podCount = '';
    }
  });
  containerInfoSubscribe = containersInfos.subscribe(value => {
    if (value.length > 0) {
      containerCount = ' (' + value.length + ')';
    } else {
      containerCount = '';
    }
  });
  imageInfoSubscribe = imagesInfos.subscribe(value => {
    let images = value.map((imageInfo: ImageInfo) => imageUtils.getImagesInfoUI(imageInfo, [])).flat();
    if (images.length > 0) {
      imageCount = ' (' + images.length + ')';
    } else {
      imageCount = '';
    }
  });
  volumeInfoSubscribe = volumeListInfos.subscribe(value => {
    let flattenedVolumes = value.map(volumeInfo => volumeInfo.Volumes).flat();
    if (flattenedVolumes.length > 0) {
      volumeCount = ' (' + flattenedVolumes.length + ')';
    } else {
      volumeCount = '';
    }
  });
  deploymentsSubscribe = deployments.subscribe(value => {
    if (value.length > 0) {
      deploymentCount = ' (' + value.length + ')';
    } else {
      deploymentCount = '';
    }
  });
  servicesSubscribe = services.subscribe(value => {
    if (value.length > 0) {
      serviceCount = ' (' + value.length + ')';
    } else {
      serviceCount = '';
    }
  });
  contextsSubscribe = kubernetesContexts.subscribe(value => {
    contextCount = value.length;
  });
});

onDestroy(() => {
  if (podInfoSubscribe) {
    podInfoSubscribe();
  }
  if (containerInfoSubscribe) {
    containerInfoSubscribe();
  }
  if (imageInfoSubscribe) {
    imageInfoSubscribe();
  }
  if (volumeInfoSubscribe) {
    volumeInfoSubscribe();
  }
  if (contextsSubscribe) {
    contextsSubscribe();
  }
  if (deploymentsSubscribe) {
    deploymentsSubscribe();
  }
  if (servicesSubscribe) {
    servicesSubscribe();
  }
});

function clickSettings(b: boolean) {
  if (b) {
    exitSettingsCallback();
  } else {
    window.location.href = '#/preferences/resources';
  }
}

export let meta: TinroRouteMeta;
</script>

<svelte:window />
<nav
  class="group w-leftnavbar min-w-leftnavbar flex flex-col justify-between hover:overflow-y-none"
  aria-label="AppNavigation">
  <NavItem href="/" tooltip="Dashboard" bind:meta="{meta}">
    <div class="relative w-full">
      <div class="flex items-center w-full h-full">
        <DashboardIcon size="24" />
      </div>
      <NewContentOnDashboardBadge />
    </div>
  </NavItem>
  <NavItem href="/kaibu" tooltip="Kaibu" ariaLabel="Kaibu" bind:meta="{meta}">
    <BioEngineIcon size="24" />
  </NavItem>

  {#if $contributions.length > 0}
    <div class="mx-3 my-2 h-[1px] bg-zinc-600"></div>
  {/if}
  {#each $contributions as contribution}
    <NavItem href="/contribs/{contribution.name}" tooltip="{contribution.name}" bind:meta="{meta}">
      <img src="{contribution.icon}" width="24" height="24" alt="{contribution.name}" />
    </NavItem>
  {/each}

  <div class="grow"></div>
  <NavItem href="/containers" tooltip="Containers{containerCount}" ariaLabel="Containers" bind:meta="{meta}">
    <ContainerIcon size="24" />
  </NavItem>
  <NavItem href="/pods" tooltip="Pods{podCount}" ariaLabel="Pods" bind:meta="{meta}">
    <PodIcon size="24" />
  </NavItem>
  <NavItem href="/images" tooltip="Images{imageCount}" ariaLabel="Images" bind:meta="{meta}">
    <ImageIcon size="24" />
  </NavItem>
  <NavItem href="/volumes" tooltip="Volumes{volumeCount}" ariaLabel="Volumes" bind:meta="{meta}">
    <VolumeIcon size="24" />
  </NavItem>
  {#if contextCount > 0}
    <NavItem href="/deployments" tooltip="Deployments{deploymentCount}" ariaLabel="Deployments" bind:meta="{meta}">
      <DeploymentIcon size="24" />
    </NavItem>
    <NavItem href="/services" tooltip="Services{serviceCount}" ariaLabel="Services" bind:meta="{meta}">
      <ServiceIcon size="24" />
    </NavItem>
  {/if}

  <NavItem
    href="/preferences"
    tooltip="Settings"
    bind:meta="{meta}"
    onClick="{() => clickSettings(meta.url.startsWith('/preferences'))}">
    <SettingsIcon size="24" />
  </NavItem>
</nav>
