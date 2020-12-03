<template>
    <div class="card">
        <template>
            <slot></slot>
            <div class="card-title">
                <slot name="card-title" />
            </div>
            <div class="card-content">
                <slot name="card-content" />
            </div>
            <div class="card-action">
                <slot name="card-footer" />
            </div>
        </template>
    </div>
</template>
<script>
export default {
    name: 'BaseCard'
}
</script>