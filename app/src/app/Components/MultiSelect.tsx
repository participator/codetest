import Action from "./Action"
import styles from "./multiselect.module.css"

export default function MultiSelect({display, handleOnClick}) {
  const {
    multiselect,
    multiselect_icon,
  } = styles

  return (
    <div className={multiselect}>
      <Action
        name={ display ? "check_box" : "check_box_outline_blank" }
        handleAction={handleOnClick}
        styles={multiselect_icon}
        />
    </div>
  )
}