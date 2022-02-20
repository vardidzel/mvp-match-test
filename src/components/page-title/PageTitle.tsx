import './PageTitle.scss';

interface PageTitleProps {
    title: string
}

export const PageTitle = ({title}: PageTitleProps) => {
    return (
        <div className="text text-dark font-weight-bold mb-32">
            {title}
        </div>
    )
}

export default PageTitle;
