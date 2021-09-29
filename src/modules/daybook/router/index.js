export default {
  name: "dayBook",
  component: () =>
    import(/* webpackChunkName: "dayBook" */ "../layout/DayBookLayaout.vue"),
  children: [
    {
      path: "",
      name: "no-entry",
      component: () =>
        import(
          /* webpackChunkName: "dayBook-no-entry" */ "../views/NoEntrySelected.vue"
        ),
    },
    {
      path: ":id",
      name: "entry",
      component: () =>
        import(
          /* webpackChunkName: "dayBook-no-entry" */ "../views/EntryView.vue"
        ),
    },
  ],
};
