(ns pompador.routes.login
            (:require [pompador.layout :as layout]
                      [pompador.util :as util]
                      [compojure.core :refer :all]
                      [noir.response :refer [edn]]
                      [clojure.pprint :refer [pprint]]))

(defn login-page []
      (layout/render
        "app.html" {:docs (util/md->html "/md/docs.md")}))

(defn save-document [doc]
      (pprint doc)
      {:status "ok"})

(defroutes home-routes
  (GET "/login" [] (login-page))
  (POST "/save" {:keys [body-params]}
    (edn (save-document body-params))))
