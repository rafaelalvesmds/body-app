export interface Action {
    icon: string;
    severity?: "success" | "secondary" | "info" | "warning" | "danger" | "contrast" | "help" | "primary" | null | undefined;
    method: (data: any) => void;
}