import noData from '../../assets/images/no-data.svg';

const NoReport = () => {
    return (
        <div className="text-center mx-auto" style={{width: 470, paddingTop: 80}}>
            <div className="text-lg text-dark font-weight-bold">No reports</div>
            <div className="text text-muted mt1" style={{marginBottom: 51}}>
                Currently you have no data for the reports to be generated.
                Once you start generating traffic through the Balance application
                the reports will be shown.
            </div>
            <img
                src={noData}
                className="no-data-image"
                alt="No data"
            />
        </div>
    )
}

export default NoReport;
