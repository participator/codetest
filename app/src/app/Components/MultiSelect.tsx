import styles from "./multiselect.module.css"

export default function MultiSelect() {
  const {
    multiselect,
    multiselect_icon,
  } = styles

  return (
    <div className={multiselect}>
      <span className={`${multiselect_icon} material-symbols-outlined`}>
        check_box_outline_blank
      </span>
    </div>
  )
}