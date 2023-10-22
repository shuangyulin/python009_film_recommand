const base = {
    get() {
        return {
            url : "http://localhost:8080/django0ozlt/",
            name: "django0ozlt",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于推荐算法的电影推荐系统"
        } 
    }
}
export default base
