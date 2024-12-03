import { onMounted } from 'vue';
import { useLinksStore } from './stores/linksStore';
import ImageProfile from './components/ImageProfile.vue';
import LinkContainer from './components/LinkContainer.vue';
import AppFooter from './components/AppFooter.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const linksStore = useLinksStore();
const gistUrl = import.meta.env.VITE_GIST_URL;
onMounted(async () => {
    await linksStore.fetchLinks(gistUrl);
});
const links = linksStore.links;
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("app-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container") }, });
    // @ts-ignore
    [ImageProfile,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(ImageProfile, new ImageProfile({ imageSrc: ("/src/assets/images/my-avatar.jpeg"), name: ("Pierre Mendes Salatiel"), role: ("Fullstack Developer"), }));
    const __VLS_1 = __VLS_0({ imageSrc: ("/src/assets/images/my-avatar.jpeg"), name: ("Pierre Mendes Salatiel"), role: ("Fullstack Developer"), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({});
    for (const [link, index] of __VLS_getVForSourceType((__VLS_ctx.links))) {
        // @ts-ignore
        [LinkContainer,];
        // @ts-ignore
        const __VLS_5 = __VLS_asFunctionalComponent(LinkContainer, new LinkContainer({ key: ((index)), iconClass: ((link.iconClass)), link: ((link.link)), label: ((link.label)), }));
        const __VLS_6 = __VLS_5({ key: ((index)), iconClass: ((link.iconClass)), link: ((link.link)), label: ((link.label)), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    }
    // @ts-ignore
    [AppFooter,];
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(AppFooter, new AppFooter({}));
    const __VLS_11 = __VLS_10({}, ...__VLS_functionalComponentArgsRest(__VLS_10));
    __VLS_styleScopedClasses['app-container'];
    __VLS_styleScopedClasses['container'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            ImageProfile: ImageProfile,
            LinkContainer: LinkContainer,
            AppFooter: AppFooter,
            links: links,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
