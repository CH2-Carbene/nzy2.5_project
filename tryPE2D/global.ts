class Global {
    static instance: Global
    static DEBUG = true
    static getInstance() {
        if (!Global.instance) {
            Global.instance = new Global()
        }
        return Global.instance
    }
}