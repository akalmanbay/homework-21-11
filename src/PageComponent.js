function PageComponent() {
    return (
        <div id="article" className="row justify-content-center pb-4">
            <div className="col-9 ">
                <div className="h-25 row">
                    <div className="d-flex flex-row font-small align-items-center">
                        <div><img src="img-2.png" alt="..." /></div>
                        <div>
                            <p className="m-0 p-1">
                                <b id="author-name">Author's name</b> <small className="text-muted">in</small>
                                <b id="topic-name">Topics Name</b> <small className="text-muted" id="article-date">7 july</small>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="h-25 row">
                    <h1 id="title">7 Practical CSS Tips</h1>
                </div>
                <div className="h-25 row">
                    <p className="col-10 desription" id="description">You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.</p>
                </div>
                <div className="h-25 row">
                    <div className="col-6 font-small d-flex justify-content-between align-items-end">
                        <button className="javascript">JavaScript</button>
                        <small id="time-to-read" className="text-muted">12 min read</small>
                        <b>·</b>
                        <small className="text-muted">Selected for you</small>
                    </div>
                    <div className="col-5 d-flex align-items-end flex-row-reverse">
                        <div id="icon"><img src="Icon.png" alt="..." /></div>
                        <div id="icon"><img src="Icon.png" alt="..." /></div>
                        <div id="icon"><img src="Icon.png" alt="..." /></div>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <img id="article-img" className="img-fluid" src='Img-5.png' alt="..." />
                <hr />
            </div>

        </div>
    )
};

export default PageComponent;