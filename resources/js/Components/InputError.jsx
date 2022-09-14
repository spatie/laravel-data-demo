export default function InputError({ message, className = "" }) {
    return message ? <p className={"text-sm text-pink-700 mt-1" + className}>{message}</p> : null;
}
