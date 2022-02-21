import './PageTitle.scss';

interface Props {
    title: string
}

export const PageTitle = ({title}: Props) => {
    return (
        <div className="text text-dark font-weight-bold mb-32">
            {title}
        </div>
    )
}

export default PageTitle;
