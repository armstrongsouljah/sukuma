<template>
    <div class="card">
        <div class="card-title">
            <slot name="card-title" />
        </div>
        <div class="card-content">
            <slot name="card-content" />
        </div>
        <div class="card-footer">
            <slot name="card-footer" />
        </div>
    </div>
</template>
<script>
export default {
    name: 'BaseCard'
}
</script>