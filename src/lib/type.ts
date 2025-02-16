import { ReactElement } from "react";

export type TNavItems = {
    name: string;
    link: string;
    command?: () => void;
};

export type TSocialsLinks = {
    name: string;
    href: string;
    icon: ReactElement;
}

export type IFaq = {
    question: string;
    answer: string;
};