import { PageTitle } from '@components/PageTitle'

const Home = () => {
    return (
        <>
            <PageTitle
                title="Current Job Openings"
                description="Browse current job openings in Hays, KS and surrounding communities."
            />
            <div className="border rounded">
                <div className="flex flex-row justify-between items-center p-2 border-b">
                    <div>
                        <div>Horizon Appliance</div>
                        <div>Retail Sales Associate</div>
                    </div>
                    <div className="flex flex-row items-center justify-end">
                        <div>June 10, 2022</div>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center p-2 border-b">
                    <div>
                        <div>Horizon Appliance</div>
                        <div>Retail Sales Associate</div>
                    </div>
                    <div className="flex flex-row items-center justify-end">
                        <div>June 10, 2022</div>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center p-2 border-b">
                    <div>
                        <div>Horizon Appliance</div>
                        <div>Retail Sales Associate</div>
                    </div>
                    <div className="flex flex-row items-center justify-end">
                        <div>June 10, 2022</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
