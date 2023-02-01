import style from './Input.module.css'

export default function Input({ type, maxLength, placeholder }) {
  return <input type={type} placeholder={placeholder} className={style.input} />;
}
