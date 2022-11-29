function ContentComponent(articleInfo) {

    return (<div id="article" className="row justify-content-center pb-4">
        <div className="col-9 ">
            <div className="h-25 row">
                <div className="d-flex flex-row font-small align-items-center">
                    <div><img src="img-2.png" alt="..." /></div>
                    <div>
                        <p className="m-0 p-1">
                            <b id="author-name">Authors name</b> <small className="text-muted">in</small>
                            <b id="topic-name">Topics Name</b>7 july <small className="text-muted" id="article-date"></small>
                        </p>
                    </div>
                </div>
            </div>
            <div className="h-25 row">

                <a href="./PageComponent.js" id="title">{articleInfo.info.title}</a>

            </div>
            <div className="h-25 row">
                <p className="col-10 desription" id="description">{articleInfo.info.description}</p>
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
            <img id="article-img" className="img-fluid" alt="..." src={articleInfo.info.img} />
        </div>
        <hr />
    </div >)
};


export default ContentComponent;