import useSessionStorage from "./useSessionStorage";
export default function usePassword() {
    return useSessionStorage('password');
}
