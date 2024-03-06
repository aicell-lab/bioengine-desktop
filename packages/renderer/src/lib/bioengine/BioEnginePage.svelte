<script lang="ts">
  import NavPage from '../ui/NavPage.svelte';
  import Button from '../ui/Button.svelte';
  import { faRocket } from '@fortawesome/free-solid-svg-icons';

  let startingBioEngine = false;
</script>


<NavPage title="bioengine">
  <svelte:fragment slot="additional-actions">
    <div class="inline-flex space-x-2">
      <Button
        on:click="{() => {}}"
        aria-label="Start BioEngine"
        title="Start BioEngine"
        bind:inProgress="{startingBioEngine}"
        icon="{faRocket}">
      </Button>
    </div>
    <!-- Only show if there are containers-->
    <!--{#if $containersInfos.length > 0}-->
      <!--<Prune type="containers" engines="{enginesList}" />-->
    <!--{/if}-->
    <!--<Button on:click="{() => toggleCreateContainer()}" icon="{faPlusCircle}" title="Create a container">Create</Button>-->
    <!--{#if providerPodmanConnections.length > 0}-->
      <!--<KubePlayButton />-->
    <!--{/if}-->
  </svelte:fragment>
  <svelte:fragment slot="bottom-additional-actions">
    Bottom Additional Actions
    <!--{#if selectedItemsNumber > 0}-->

      <!--<span>On {selectedItemsNumber} selected items.</span>-->
    <!--{/if}-->
  </svelte:fragment>

  <svelte:fragment slot="tabs">
    Tabs
    <!--<Button type="tab" on:click="{() => resetRunningFilter()}" selected="{containerUtils.filterIsAll(searchTerm)}"-->
      <!--All</Button>-->
    <!--<Button type="tab" on:click="{() => setRunningFilter()}" selected="{containerUtils.filterIsRunning(searchTerm)}"-->
      <!--Running</Button>-->
    <!--<Button type="tab" on:click="{() => setStoppedFilter()}" selected="{containerUtils.filterIsStopped(searchTerm)}"-->
      <!--Stopped</Button>-->
  </svelte:fragment>

  <div class="flex min-w-full h-full" slot="content">
    <!--<table class="mx-5 w-full h-fit" class:hidden="{containerGroups.length === 0}">-->
    <!--<table class="mx-5 w-full h-fit">-->
      <!--[> title <]-->
      <!--<thead class="sticky top-0 bg-charcoal-700 z-[2]">-->
        <!--<tr class="h-7 uppercase text-xs text-gray-600">-->
          <!--<th class="whitespace-nowrap w-5"></th>-->
          <!--<th class="px-2 w-5">-->
            <!--<Checkbox-->
              <!--title="Toggle all"-->
              <!--bind:checked="{selectedAllCheckboxes}"-->
              <!--indeterminate="{selectedItemsNumber > 0 && !selectedAllCheckboxes}"-->
              <!--on:click="{event => toggleAllContainerGroups(event.detail)}" />-->
          <!--</th>-->
          <!--<th class="text-center font-extrabold w-10 px-2">Status</th>-->
          <!--<th>Name</th>-->
          <!--<th class="pl-3">Environment</th>-->
          <!--<th class="pl-3">Image</th>-->
          <!--<th class="pl-3">Age</th>-->
          <!--<th class="text-right pr-2">Actions</th>-->
        <!--</tr>-->
      <!--</thead>-->

      <!--[> Display each group <]-->
      <!--{#each containerGroups as containerGroup}-->
        <!--<tbody>-->
          <!--{#if containerGroup.type === ContainerGroupInfoTypeUI.COMPOSE || containerGroup.type === ContainerGroupInfoTypeUI.POD}-->
            <!--<tr class="group h-12 bg-charcoal-800 hover:bg-zinc-700">-->
              <!--<td-->
                <!--class="bg-charcoal-800 group-hover:bg-zinc-700 pl-2 w-3 rounded-tl-lg"-->
                <!--class:rounded-bl-lg="{!containerGroup.expanded}"-->
                <!--on:click="{() => toggleContainerGroup(containerGroup)}">-->
                <!--<Fa-->
                  <!--size="12"-->
                  <!--class="text-gray-700 cursor-pointer"-->
                  <!--icon="{containerGroup.expanded ? faChevronDown : faChevronRight}" />-->
              <!--</td>-->
              <!--<td class="px-2">-->
                <!--<Checkbox-->
                  <!--title="Toggle {containerGroup.type}"-->
                  <!--bind:checked="{containerGroup.selected}"-->
                  <!--on:click="{event => toggleCheckboxContainerGroup(event.detail, containerGroup)}" />-->
              <!--</td>-->
              <!--<td class="flex flex-row justify-center h-12" title="{containerGroup.type}">-->
                <!--<div class="grid place-content-center ml-3 mr-4">-->
                  <!--<StatusIcon icon="{PodIcon}" status="{containerGroup.status}" />-->
                <!--</div>-->
              <!--</td>-->
              <!--<td class="whitespace-nowrap hover:cursor-pointer">-->
                <!--<div class="flex items-center text-sm text-gray-300 overflow-hidden text-ellipsis">-->
                  <!--<div>-->
                    <!--<button-->
                      <!--class="text-sm text-gray-300 overflow-hidden text-ellipsis"-->
                      <!--title="{containerGroup.type}"-->
                      <!--on:click="{() => openGroupDetails(containerGroup)}">-->
                      <!--{containerGroup.name} ({containerGroup.type})-->
                    <!--</button>-->
                    <!--<div class="text-xs font-extra-light text-gray-900">-->
                      <!--{displayContainersCount(containerGroup)}-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</td>-->
              <!--<td class="pl-3 whitespace-nowrap hover:cursor-pointer group">-->
                <!--<div class="flex items-center text-xs p-1 rounded-md text-gray-500"></div>-->
              <!--</td>-->
              <!--<td class="px-6 py-2 whitespace-nowrap w-10"> </td>-->
              <!--<td class="whitespace-nowrap pl-3">-->
                <!--<div class="flex items-center">-->
                  <!--<div class="text-sm text-gray-700"></div>-->
                <!--</div>-->
              <!--</td>-->
              <!--<td-->
                <!--class="pl-6 text-right whitespace-nowrap rounded-tr-lg"-->
                <!--class:rounded-br-lg="{!containerGroup.expanded}">-->
                <!--[> Only show POD actions if the container group is POD, otherwise keep blank / empty (for future compose implementation) <]-->
                <!--{#if containerGroup.type === ContainerGroupInfoTypeUI.POD && containerGroup.engineId && containerGroup.id && containerGroup.shortId && containerGroup.status && containerGroup.engineName && containerGroup.humanCreationDate && containerGroup.created}-->
                  <!--<PodActions-->
                    <!--pod="{{-->
                      <!--id: containerGroup.id,-->
                      <!--shortId: containerGroup.shortId,-->
                      <!--status: containerGroup.status,-->
                      <!--name: containerGroup.name,-->
                      <!--engineId: containerGroup.engineId,-->
                      <!--engineName: containerGroup.engineName,-->
                      <!--age: containerGroup.humanCreationDate,-->
                      <!--created: containerGroup.created,-->
                      <!--selected: false,-->
                      <!--containers: containerGroup.containers.map(container => ({-->
                        <!--Id: container.id,-->
                        <!--Names: container.name,-->
                        <!--Status: container.state,-->
                      <!--})),-->
                      <!--kind: 'podman',-->
                    <!--}}"-->
                    <!--dropdownMenu="{true}"-->
                    <!--on:update="{() => (containerGroups = [...containerGroups])}" />-->
                <!--{/if}-->
                <!--{#if containerGroup.type === ContainerGroupInfoTypeUI.COMPOSE && containerGroup.status && containerGroup.engineId && containerGroup.engineType}-->
                  <!--<ComposeActions-->
                    <!--compose="{{-->
                      <!--status: containerGroup.status,-->
                      <!--name: containerGroup.name,-->
                      <!--engineId: containerGroup.engineId,-->
                      <!--engineType: containerGroup.engineType,-->
                      <!--containers: containerGroup.containers,-->
                    <!--}}"-->
                    <!--dropdownMenu="{true}"-->
                    <!--on:update="{() => {-->
                      <!--containerGroups = [...containerGroups];-->
                    <!--}}" />-->
                <!--{/if}-->
              <!--</td>-->
            <!--</tr>-->
          <!--{/if}-->
          <!--[> Display each container of this group <]-->
          <!--{#if containerGroup.expanded}-->
            <!--{#each containerGroup.containers as container, index}-->
              <!--<tr class="group h-12 bg-charcoal-800 hover:bg-zinc-700">-->
                <!--<td-->
                  <!--class="{containerGroup.type === ContainerGroupInfoTypeUI.STANDALONE ? 'rounded-tl-lg' : ''} {index ===-->
                  <!--containerGroup.containers.length - 1-->
                    <!--? 'rounded-bl-lg'-->
                    <!--: ''}">-->
                <!--</td>-->
                <!--<td class="px-2">-->
                  <!--<Checkbox title="Toggle container" bind:checked="{container.selected}" />-->
                <!--</td>-->
                <!--<td class="flex flex-row justify-center h-12">-->
                  <!--<div class="grid place-content-center ml-3 mr-4">-->
                    <!--<StatusIcon icon="{container.icon}" status="{container.state}" />-->
                  <!--</div>-->
                <!--</td>-->
                <!--<td-->
                  <!--class="whitespace-nowrap hover:cursor-pointer group"-->
                  <!--on:click="{() => openDetailsContainer(container)}">-->
                  <!--<div class="flex items-center">-->
                    <!--<div class="">-->
                      <!--<div class="flex flex-nowrap">-->
                        <!--<div-->
                          <!--class="text-sm text-gray-300 overflow-hidden text-ellipsis group-hover:text-violet-400"-->
                          <!--title="{container.name}">-->
                          <!--{container.name}-->
                        <!--</div>-->
                      <!--</div>-->
                      <!--<div class="flex flex-nowrap text-xs font-extra-light text-gray-900 items-center">-->
                        <!--<div>{container.state}</div>-->
                        <!--<div class="pl-2 pr-2 inline-flex">{container.displayPort}</div>-->
                      <!--</div>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</td>-->
                <!--<td class="pl-3 whitespace-nowrap hover:cursor-pointer group">-->
                  <!--<div class="flex items-center text-xs p-1 rounded-md text-gray-500">-->
                    <!--<ProviderInfo provider="{container.engineType}" context="{container.engineId}" />-->
                  <!--</div>-->
                <!--</td>-->
                <!--[> Open the container details, TODO: open image details instead? <]-->
                <!--<td-->
                  <!--class="pl-3 whitespace-nowrap hover:cursor-pointer group"-->
                  <!--on:click="{() => openDetailsContainer(container)}">-->
                  <!--<div class="flex items-center">-->
                    <!--<div class="text-sm text-gray-700 overflow-hidden text-ellipsis" title="{container.image}">-->
                      <!--{container.shortImage}-->
                    <!--</div>-->
                  <!--</div></td>-->
                <!--<td class="whitespace-nowrap pl-3">-->
                  <!--<div class="flex items-center">-->
                    <!--<div class="text-sm text-gray-700">-->
                      <!--<StateChange state="{container.state}">{container.uptime}</StateChange>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</td>-->
                <!--<td-->
                  <!--class="pl-6 text-right whitespace-nowrap {containerGroup.type === ContainerGroupInfoTypeUI.STANDALONE-->
                    <!--? 'rounded-tr-lg'-->
                    <!--: ''} {index === containerGroup.containers.length - 1 ? 'rounded-br-lg' : ''}">-->
                  <!--<div class="flex w-full">-->
                    <!--<div class="flex items-center w-5">-->
                      <!--{#if container.actionError}-->
                        <!--<ErrorMessage error="{container.actionError}" icon />-->
                      <!--{:else}-->
                        <!--<div>&nbsp;</div>-->
                      <!--{/if}-->
                    <!--</div>-->
                    <!--<div class="text-right w-full">-->
                      <!--<ContainerActions-->
                        <!--container="{container}"-->
                        <!--dropdownMenu="{true}"-->
                        <!--on:update="{() => (containerGroups = [...containerGroups])}" />-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</td>-->
              <!--</tr>-->
            <!--{/each}-->
          <!--{/if}-->
        <!--</tbody>-->
        <!--<tr><td class="leading-[8px]">&nbsp;</td></tr>-->
      <!--{/each}-->
    <!--</table>-->

    <!--{#if providerConnections.length === 0}-->
      <!--<NoContainerEngineEmptyScreen />-->
    <!--{:else if containerGroups.length === 0}-->
      <!--{#if containerUtils.filterSearchTerm(searchTerm)}-->
        <!--<FilteredEmptyScreen-->
          <!--icon="{ContainerIcon}"-->
          <!--kind="containers"-->
          <!--on:resetFilter="{() => (searchTerm = containerUtils.filterResetSearchTerm(searchTerm))}"-->
          <!--searchTerm="{containerUtils.filterSearchTerm(searchTerm)}" />-->
      <!--{:else}-->
        <!--<ContainerEmptyScreen-->
          <!--runningOnly="{containerUtils.filterIsRunning(searchTerm)}"-->
          <!--stoppedOnly="{containerUtils.filterIsStopped(searchTerm)}" />-->
      <!--{/if}-->
    <!--{/if}-->
  <!--</div>-->
</NavPage>

