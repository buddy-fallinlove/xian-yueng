<template>
<div>
    <div id='container'></div>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext
} from 'vue'
interface Data {}
export default defineComponent({
    name: '',
    props: {},
    components: {

    },
    setup(props, ctx: SetupContext) {

        const data: Data = reactive < Data > ({})
        const disabledDate = (current: any) => {
            return current && current <= moment().endOf("day");
        };

        const disabledRangeTime = (_: any, type: any) => {
            if (type === "start") {
                return {
                    disabledHours: () => range(0, 60).splice(4, 20),
                    disabledMinutes: () => range(30, 60),
                    disabledSeconds: () => [55, 56],
                };
            }
            return {
                disabledHours: () => range(0, 60).splice(20, 4),
                disabledMinutes: () => range(0, 31),
                disabledSeconds: () => [55, 56],
            };
        }
    }
    return {
        //...toRefs(data),
    }
},
})
</script>

<style scoped lang='scss'>

</style>
