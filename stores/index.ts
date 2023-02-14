import type { DeepReadonly, UnwrapNestedRefs } from "@vue/reactivity";
import { reactive, readonly } from "vue";

export interface DataModel {
  sectionClass: string;
  containerClass: string;
  mainClass: string;
  projects: any
  blogs: any
}

export class DataStore {
  constructor() {
    this._init();
    this._state = reactive(this._state);
  }

  private _state!: UnwrapNestedRefs<DataModel>;

  get state(): DeepReadonly<DataModel> {
    return readonly(this._state);
  }

  setSectionClass(classList: string) {
    this._state.sectionclass = classList;
  }
  setContainerClass(classList: string) {
    this._state.containerClass = classList;
  }
  setMainClass(classList: string) {
    this._state.mainClass = classList;
  }

  getSingleProject({ projectId: id }: any) {
    const projectIndex = this.state.projects.findIndex((project: { id: string; }) => {
      return project.id === id
    })
    return this.state.projects[projectIndex]
  }
  getSingleBlog({ blogId: id }: any) {
    const blogIndex = this.state.blogs.findIndex((blog: { id: string; }) => {
      return blog.id === id
    })
    return this.state.blogs[blogIndex]
  }
  private _init() {
    this._state = {
      sectionClass: "",
      containerClass: "",
      mainClass: "",
      projects: [
        {
          id: '1',
          image: '@/assets/img/camo.png',
          title: 'title',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, odit?',
        },
        {
          id: '2',
          image: '@/assets/img/camo.png',
          title: 'title',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, odit?',
        },
        {
          id: '3',
          image: '@/assets/img/camo.png',
          title: 'title',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, odit?',
        },
        {
          id: '4',
          image: '@/assets/img/camo.png',
          title: 'title',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, odit?',
        },
        {
          id: '5',
          image: '@/assets/img/camo.png',
          title: 'title',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, odit?',
        },
      ],
      blogs: [
        {
          id: '1',
          image: '@/assets/img/camo.png',
          title: 'title',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, odit?',
        },
        {
          id: '2',
          image: '@/assets/img/camo.png',
          title: 'title',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, odit?',
        },
        {
          id: '3',
          image: '@/assets/img/camo.png',
          title: 'title',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, odit?',
        },
        {
          id: '4',
          image: '@/assets/img/camo.png',
          title: 'title',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, odit?',
        },
        {
          id: '5',
          image: '@/assets/img/camo.png',
          title: 'title',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, odit?',
        },
      ]
    };
  }
}

const dataStore = new DataStore();

export default function useDataStore(): DataStore {
  return dataStore;
}
