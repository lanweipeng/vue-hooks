<script>
import { ref } from "vue";
export  default function useAsync(server) {
  const loading = ref(true);
  server().then(() => {
    loading.value = false;
  });
  return {
    loading,
  };
}
</script>