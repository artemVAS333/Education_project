import { ref } from 'vue';

export const open = ref(false);

export const toggleMenu = () => {
	open.value = !open.value;
	document.body.classList.toggle('lock');
};
