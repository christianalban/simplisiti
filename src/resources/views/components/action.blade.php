<form action="{{ route($action) }}" method="POST" {{ $attributes }}>
    @csrf
    @method($method)

    {{ $slot }}
</form>