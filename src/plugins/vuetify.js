import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import "echarts"

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'fa' || 'md'
    },
    theme: {
        themes:{
            dark: {
                background: '#EEEEEE'
            }
        }
    }

});
