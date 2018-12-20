package com.github.christophpickl.mytypescript

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class MytypescriptApplication {
    companion object {
        @JvmStatic
        fun main(args: Array<String>) {
            runApplication<MytypescriptApplication>(*args)
        }
    }
}

