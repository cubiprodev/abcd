if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/home/sonal/.gradle/caches/transforms-3/5cf5511372e70c02a86a54c3988c86e2/transformed/jetified-hermes-android-0.72.6-debug/prefab/modules/libhermes/libs/android.x86_64/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/home/sonal/.gradle/caches/transforms-3/5cf5511372e70c02a86a54c3988c86e2/transformed/jetified-hermes-android-0.72.6-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

