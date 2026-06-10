export function useStickyHeader(threshold = 120) {
  const isFixed = ref(false);

  function update() {
    isFixed.value = window.scrollY > threshold;
  }

  onMounted(() => {
    update();
    window.addEventListener('scroll', update, { passive: true });
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', update);
  });

  return {
    isFixed,
  };
}
