export const formatDate = (date?: Date): string => {
    return date?.toISOString().split('T')[0] || '';
}

export const toDate = (value?: string | null): Date | undefined => {
    return value ? new Date(value) : undefined;
}
