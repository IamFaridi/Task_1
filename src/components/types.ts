export interface SectionProps {
    children: React.ReactNode;
    className: string;
}

export interface SlideProps{
    id?: string;
    year: string;
    heading?:boolean;
    bgColor?: string;
}