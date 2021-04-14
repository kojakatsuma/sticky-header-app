import { useState, useEffect, useRef, useCallback } from "react";

export const StickyHeader = (defaultSticky = false) => {

    const [isSticky, setIsSticky] = useState(defaultSticky)
    const tableRef = useRef<HTMLTableElement | null>(null)
    const toggleSticky = useCallback(({ top, bottom }) => {
        if (top <= 0 && bottom > 2 * 68) {
            !isSticky && setIsSticky(true)
            return;
        }
        isSticky && setIsSticky(false)
    }, [isSticky])

    useEffect(() => {
        const handleScroll = () => {
            toggleSticky(tableRef.current?.getBoundingClientRect())
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll",handleScroll)
        }
    },[toggleSticky])

    return {tableRef, isSticky}

}