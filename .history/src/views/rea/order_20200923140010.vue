<template>
<div>

</div>
</template>

<script lang="ts">
import router from '@/router';
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext,
    onMounted
} from 'vue'
import {
    useRoute
} from "vue-router";
interface Data {
    id: string | number;
    _id: string | number;
}
export default defineComponent({
    name: '',
    props: {},
    components: {

    },
    setup(props, ctx: SetupContext) {
        const route = useRoute();
        const data: Data = reactive < Data > ({
            id: "",
            _id: "",

        })
        onMounted(() => {
            if (route.query.id, route.query._id) {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                data.id = route.query.id!as string;
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                data._id = route.query._id!as string;
                console.log(data.id)
                console.log(data._id)
            }

        })
        return {
            ...toRefs(data),
        }
    },
})
</script>

<style scoped lang='scss'>

</style>
