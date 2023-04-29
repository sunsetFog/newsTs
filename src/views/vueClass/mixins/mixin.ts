import { Options, Vue } from 'vue-class-component';

export default class MyMixin extends Vue {
    created(): void {
        console.log("--混入--created--")
    }
}