if(NOT TARGET fbjni::fbjni)
add_library(fbjni::fbjni SHARED IMPORTED)
set_target_properties(fbjni::fbjni PROPERTIES
    IMPORTED_LOCATION "/home/sonal/.gradle/caches/transforms-3/2ad7d111a276d50f84009b2c4a1f15c0/transformed/jetified-fbjni-0.3.0/prefab/modules/fbjni/libs/android.armeabi-v7a/libfbjni.so"
    INTERFACE_INCLUDE_DIRECTORIES "/home/sonal/.gradle/caches/transforms-3/2ad7d111a276d50f84009b2c4a1f15c0/transformed/jetified-fbjni-0.3.0/prefab/modules/fbjni/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

