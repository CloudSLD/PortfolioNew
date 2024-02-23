/* eslint-disable prettier/prettier */

type TechBadgeProps = {
    name: string
}

export const TechBadge = ({name}: TechBadgeProps) => {
    return(
        <span  className=" text-sm py-1 px-3 rounded-lg text-emerald-400 bg-emerald-900/80">
            {name}
        </span>
    )
}