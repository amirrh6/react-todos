import Navbar from './components/Navbar';

const App = () => {
    return (
        <>
            <Navbar />

            <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                        Most recent TODOs
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* TODO #1 */}
                        <div className="bg-white rounded-xl shadow-md relative">
                            <div className="p-4">
                                <div className="mb-6">
                                    <div className="text-gray-600 my-2">High priority</div>
                                    <h3 className="text-xl font-bold">Hangout with friends</h3>
                                </div>

                                <div className="mb-5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Praesent ut efficitur dolor, et suscipit nisl. Nulla auctor est
                                    justo, efficitur cursus purus facilisis eu. Nulla nec hendrerit
                                    felis. Morbi non blandit elit. Suspendisse vestibulum sed mauris
                                    quis commodo. In a dui in felis tincidunt luctus quis ut nisl.
                                    Pellentesque eget finibus turpis. Sed a dui varius, egestas leo
                                    interdum, pellentesque mi. Donec ac ante vel neque sagittis
                                    commodo vel eget ante.
                                </div>

                                <h3 className="text-orange-700 mb-2">Pending</h3>

                                <div className="border border-gray-100 mb-5"></div>

                                <div className="flex flex-col lg:flex-row justify-between mb-4">
                                    <a
                                        href="#"
                                        className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                                    >
                                        Details
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* TODO #2 */}
                        <div className="bg-white rounded-xl shadow-md relative">
                            <div className="p-4">
                                <div className="mb-6">
                                    <div className="text-gray-600 my-2">Low priority</div>
                                    <h3 className="text-xl font-bold">Study for exams</h3>
                                </div>

                                <div className="mb-5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Praesent ut efficitur dolor, et suscipit nisl. Nulla auctor est
                                    justo, efficitur cursus purus facilisis eu. Nulla nec hendrerit
                                    felis. Morbi non blandit elit. Suspendisse vestibulum sed mauris
                                    quis commodo. In a dui in felis tincidunt luctus quis ut nisl.
                                    Pellentesque eget finibus turpis. Sed a dui varius, egestas leo
                                    interdum, pellentesque mi. Donec ac ante vel neque sagittis
                                    commodo vel eget ante.
                                </div>

                                <h3 className="text-indigo-500 mb-2">Done</h3>

                                <div className="border border-gray-100 mb-5"></div>

                                <div className="flex flex-col lg:flex-row justify-between mb-4">
                                    <a
                                        href="#"
                                        className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                                    >
                                        Details
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* TODO #3 */}
                        <div className="bg-white rounded-xl shadow-md relative">
                            <div className="p-4">
                                <div className="mb-6">
                                    <div className="text-gray-600 my-2">Medium priority</div>
                                    <h3 className="text-xl font-bold">Do the laundry</h3>
                                </div>

                                <div className="mb-5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Praesent ut efficitur dolor, et suscipit nisl. Nulla auctor est
                                    justo, efficitur cursus purus facilisis eu. Nulla nec hendrerit
                                    felis. Morbi non blandit elit. Suspendisse vestibulum sed mauris
                                    quis commodo. In a dui in felis tincidunt luctus quis ut nisl.
                                    Pellentesque eget finibus turpis. Sed a dui varius, egestas leo
                                    interdum, pellentesque mi. Donec ac ante vel neque sagittis
                                    commodo vel eget ante.
                                </div>

                                <h3 className="text-orange-700 mb-2">Pending</h3>

                                <div className="border border-gray-100 mb-5"></div>

                                <div className="flex flex-col lg:flex-row justify-between mb-4">
                                    <a
                                        href="#"
                                        className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                                    >
                                        Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="m-auto max-w-lg my-10 px-6">
                <a
                    href="#"
                    className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
                >
                    View All TODOs
                </a>
            </section>
        </>
    );
};

export default App;
