import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function textTypingEffect(element:any, text:string, i = 0) {
  if( i === 0){
    element.textContext = "";
  }
  
  element.textContext += text[i];

  if (i === text.length - 1) {
    return
  }

  setTimeout(()=> textTypingEffect(element, text, i + 1), 550)
}