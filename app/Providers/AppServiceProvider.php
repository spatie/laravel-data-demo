<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Spatie\TypeScriptTransformer\Laravel\LaravelDefaultTypesProvider;
use Spatie\TypeScriptTransformer\Laravel\LaravelTypeScriptTransformerConfig;
use Spatie\TypeScriptTransformer\Laravel\RouterGenerator;
use Spatie\TypeScriptTransformer\Laravel\SpatieLaravelDefaultTypesProvider;
use Spatie\TypeScriptTransformer\Transformers\AttributeTransformer;
use Spatie\TypeScriptTransformer\Transformers\DataClassTransformer;
use Spatie\TypeScriptTransformer\Transformers\EnumTransformer;
use Spatie\TypeScriptTransformer\TypeScriptTransformerConfig;
use Spatie\TypeScriptTransformer\Writers\NamespaceWriter;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        LaravelTypeScriptTransformerConfig::$defined = new TypeScriptTransformerConfig(
            [app_path()],
            [
                new EnumTransformer(),
                new AttributeTransformer(),
                new DataClassTransformer(),
            ],
            [
                LaravelDefaultTypesProvider::class,
                SpatieLaravelDefaultTypesProvider::class,
                RouterGenerator::class
            ],
            new NamespaceWriter(resource_path('types/generated.d.ts'))
//            new ModuleWriter(
//                resource_path('types')
//            )
        );
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
