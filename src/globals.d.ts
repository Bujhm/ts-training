declare global {
    /**
     * my formatDate implementation
     * @param date Date object
     */
    function formatDate(date: Date): string

    interface Window {
        MY_VAR: string
    }
}

export {}