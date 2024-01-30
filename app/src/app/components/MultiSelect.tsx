import Action from "./Action"
import styles from "./multiselect.module.css"

export default function MultiSelect({display, handleOnClick}) {
  const {
    multiselect_icon,
  } = styles

  return (
      <Action
        name={ display ? "check_box" : "check_box_outline_blank" }
        handleAction={handleOnClick}
        styles={multiselect_icon}
        />
  )
}