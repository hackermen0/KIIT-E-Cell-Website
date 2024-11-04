<script lang="ts">
    import {onMount} from 'svelte';
    import { invalidateAll } from '$app/navigation';
    import type { HeroData } from '$types/HeroData.js';
    export let data : HeroData;

    let darkMode: boolean | undefined = undefined; // Initially undefined

    // This runs only in the browser

    onMount(() => {
        invalidateAll() 
        const savedTheme = localStorage.getItem('darkMode'); // Checks if the user has a saved theme preference in localStorage
        if (savedTheme !== null) {
            darkMode = savedTheme === 'true'; // Convert the stored string to boolean
        } else {
            // If no preference is saved, fall back to system preference or default (light)
            darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        
        setTheme(); // Set the theme based on the saved preference or system preference
    });

    // Function to set the theme based on the darkMode value
    function setTheme() {
        if (darkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }

    // Watch for changes in darkMode and update theme + localStorage
    $: if (typeof document !== 'undefined' && darkMode !== undefined) {
        setTheme(); // Apply the theme change when darkMode changes


        localStorage.setItem('darkMode', darkMode.toString()); // Save the user's theme preference to localStorage
    }
</script>

<div class="bg-gradient-to-br from-blue-400 via-purple-500 to-white dark:from-blue-800 dark:via-purple-900 dark:to-black">
    <div class="min-h-screen flex flex-col">
        <nav class="navbar mt-8 flex flex-row justify-between font-mono w-full md:w-11/12 md:mx-auto bg-white dark:bg-slate-800 dark:text-white drop-shadow-2xl rounded-2xl">
            <div>
                <a href="/" class="btn btn-ghost text-md md:text-xl">KIIT E-Cell</a>
            </div>
            <label class="flex cursor-pointer gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <path
                    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <input type="checkbox" id="themeToggle" value="dark" bind:checked={darkMode} class="toggle theme-controller bg-slate-700 dark:bg-slate-200" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>
        </nav>
        <div class="box">
            <div class="pattern">
            </div>
            <div class="z-10 text-2xl w-3/4 h-full bg-none flex flex-col drop-shadow-2xl justify-center">
                <div class="w-full flex flex-col h-4/5">
                    <div class="my-auto dark:text-white text-black">
                        <p class="text-[2.5rem] md:text-[5rem]">{data.header}</p>
                        <p class="text-[1rem] md:text-[1.5rem] mt-6 md:mt-14 font-light whitespace-pre-wrap">{data.subtext}</p>
                        <a href="/">
                            <button class="btn border-none btn-primary w-1/2 mt-10 md:mt-14 bg-white text-black hover:bg-slate-400 dark:bg-slate-800 dark:hover:bg-slate-500 dark:text-white hover:text-white">{data.cta_button_text}</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

