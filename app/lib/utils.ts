/* eslint-disable prettier/prettier */
import {ClassValue, clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'


export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs))
}
// eslint-disable-next-line prettier/prettier

