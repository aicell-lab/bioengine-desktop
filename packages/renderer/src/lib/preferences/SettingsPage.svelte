<script lang="ts">
export let title: string;
</script>

<div class="flex flex-col min-w-full h-full" role="region" aria-label="{title}">
  <div class="min-w-full px-5 py-4" role="region" aria-label="Header">
    <div class="flex flex-row">
      <div class="grow">
        <div class="capitalize text-xl" role="heading" aria-level="1" aria-label="Title">{title}</div>
        <div class="text-sm text-gray-700" role="heading" aria-level="2" aria-label="Subtitle">
          <slot name="subtitle"><br /></slot>
        </div>
      </div>
      <slot name="actions" />
    </div>

    <slot name="header" />
  </div>
  <div class="flex flex-row min-w-full h-full px-5 py-4 overflow-y-auto" role="region" aria-label="Content">
    <div class="flex flex-col grow max-w-[905px] mx-auto">
      <slot />
    </div>
  </div>
</div>
