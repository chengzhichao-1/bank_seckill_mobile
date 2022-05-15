import { Module } from "vuex"
import { IRootState } from "../types"
import { IGuideState } from "."
import { getAllAQ } from "@/service/other/other"

const guideModule: Module<IGuideState, IRootState> = {
  namespaced: true,
  state() {
    return {
      questions: []
    }
  },
  mutations: {
    changeQuestions(state, questions) {
      state.questions = questions
    }
  },
  actions: {
    async getQuestionsAction({ commit }) {
      const questions = await getAllAQ()
      console.log(questions)
      commit("changeQuestions", questions)
    }
  }
}

export default guideModule
