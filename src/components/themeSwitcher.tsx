'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react';

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className=" dark:bg-white flex items-center justify-center rounded-full bg-white/10 px-3 py-2 text-xs uppercase leading-4 tracking-widest text-white hover:bg-white/20 sm:px-4 sm:py-2 sm:text-sm"
        >
            {theme === 'dark' ? (
                <Sun color='#000' width={20} height={20} />
            ) : (
                <Moon width={20} height={20} />
            )}
        </button>
    )
}