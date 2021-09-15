import useLocalStorage from "./useLocalStorage";

export default function useAllowList(){
    return useLocalStorage('allowlist');
}