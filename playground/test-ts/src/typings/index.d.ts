import "react";

declare module "react" {
    interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
        jsx?: boolean | undefined;
        global?: boolean | undefined;
    }
}